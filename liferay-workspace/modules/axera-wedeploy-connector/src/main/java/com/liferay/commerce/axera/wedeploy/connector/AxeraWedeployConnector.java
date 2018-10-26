package com.liferay.commerce.axera.wedeploy.connector;

import com.liferay.commerce.constants.CommerceOrderConstants;
import com.liferay.commerce.model.CommerceOrder;
import com.liferay.commerce.model.CommerceOrderItem;
import com.liferay.portal.kernel.exception.ModelListenerException;
import com.liferay.portal.kernel.json.JSONArray;
import com.liferay.portal.kernel.json.JSONFactoryUtil;
import com.liferay.portal.kernel.json.JSONObject;
import com.liferay.portal.kernel.model.BaseModelListener;
import com.liferay.portal.kernel.model.ModelListener;
import com.liferay.portal.kernel.workflow.WorkflowConstants;

import java.io.DataOutputStream;
import java.io.IOException;

import java.math.BigDecimal;

import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URL;

import java.util.List;

import org.osgi.service.component.annotations.Component;

/**
 * @author Adam Brandizzi
 */
@Component(immediate = true, service = ModelListener.class)
public class AxeraWedeployConnector extends BaseModelListener<CommerceOrder> {

	@Override
	public void onAfterUpdate(CommerceOrder order)
		throws ModelListenerException {

		if (isOrderReady(order)) {
			try {
				creditPoints(order);
			} catch (Exception e) {
				throw new ModelListenerException(e);
			}

			System.out.println("Order completed! " + order);
		}

		super.onAfterUpdate(order);
	}

	protected HttpURLConnection connectToWeDeploy()
		throws IOException, MalformedURLException, ProtocolException {

		URL url = new URL("https://data-hackathon.wedeploy.io/points");

		HttpURLConnection connection = (HttpURLConnection)url.openConnection();

		connection.setRequestMethod("POST");
		connection.setDoOutput(true);
		connection.setRequestProperty(
			"Content-Type", "application/json; charset=UTF-8");

		return connection;
	}

	protected JSONObject createItemJSON(String name, BigDecimal price,
			String customerId, String orderDate) {

		JSONObject points = JSONFactoryUtil.createJSONObject();

		points.put("customerId", customerId);
		points.put("date", orderDate);
		points.put("points", price.toBigInteger().toString());
		points.put("productName", name);

		return points;
	}

	protected JSONArray createJSONArray(CommerceOrder order,
			List<CommerceOrderItem> items) {

		JSONArray array = JSONFactoryUtil.createJSONArray();

		for (CommerceOrderItem item : items) {
			System.out.println(item);
			String name = item.getNameCurrentValue();
			BigDecimal price = item.getPrice();
			String customerId = getCustomerId(order);
			String orderDate = order.getCreateDate().toString();

			JSONObject points = createItemJSON(name, price, customerId,
				orderDate);

			array.put(points);
		}

		return array;
	}

	protected void creditPoints(CommerceOrder order)
		throws IOException, MalformedURLException, ProtocolException {

		HttpURLConnection connection = connectToWeDeploy();

		List<CommerceOrderItem> items = order.getCommerceOrderItems();

		JSONArray array = createJSONArray(order, items);

		System.out.println(array.toJSONString());

		connection.connect();

		try(DataOutputStream wr =
				new DataOutputStream(connection.getOutputStream())) {

			wr.writeBytes(array.toJSONString());
		}

		System.out.println(connection.getResponseCode());
	}

	protected String getCustomerId(CommerceOrder order) {
		return order.getUserName();
	}

	protected boolean isOrderReady(CommerceOrder order) {
		if (order.getPaymentStatus() ==
				CommerceOrderConstants.PAYMENT_STATUS_PAID &&
			order.getOrderStatus() ==
				CommerceOrderConstants.ORDER_STATUS_TO_TRANSMIT &&
			order.getStatus() == WorkflowConstants.STATUS_APPROVED) {

			return true;
		}

		return false;
	}

}