package com.liferay.commerce.axera.wedeploy.connector;

import com.liferay.portal.kernel.json.JSONFactoryUtil;
import com.liferay.portal.kernel.json.JSONObject;
import com.liferay.portal.kernel.json.JSONSerializable;
import com.liferay.portal.kernel.model.BaseModel;
import com.liferay.portal.kernel.model.BaseModelListener;

import java.io.DataOutputStream;
import java.io.IOException;

import java.math.BigDecimal;

import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URL;

public class BaseWeDeployConnector<T extends BaseModel<T>>
	extends BaseModelListener<T> {

	protected HttpURLConnection connectToWeDeploy()
		throws IOException, MalformedURLException, ProtocolException {

		URL url = new URL("https://data-hackathon.wedeploy.io/points");

		HttpURLConnection connection = (HttpURLConnection)url.openConnection();

		connection.setRequestMethod("POST"); connection.setDoOutput(true);
		connection.setRequestProperty(
			"Content-Type", "application/json; charset=UTF-8");

		return connection;
	}

	protected JSONObject createItemJSON(
		String name, BigDecimal price, String customerId, String orderDate) {

		JSONObject points = JSONFactoryUtil.createJSONObject();

		points.put("customerId", customerId);
		points.put("date", orderDate);
		points.put("points", price.toBigInteger().toString());
		points.put("productName", name);

		return points;
	}

	protected void sendToWeDeploy(JSONSerializable array)
		throws IOException, MalformedURLException, ProtocolException {

		HttpURLConnection connection = connectToWeDeploy();

		connection.connect();

		try (DataOutputStream wr =
				new DataOutputStream(connection.getOutputStream())) {

			wr.writeBytes(array.toJSONString());
		}

		System.out.println(connection.getResponseCode());
	}

}