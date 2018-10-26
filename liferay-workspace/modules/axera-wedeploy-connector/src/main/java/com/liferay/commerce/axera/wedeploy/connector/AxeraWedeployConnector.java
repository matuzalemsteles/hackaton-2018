package com.liferay.commerce.axera.wedeploy.connector;

import com.liferay.commerce.model.CommerceOrder;
import com.liferay.commerce.model.CommerceOrderConstants;
import com.liferay.portal.kernel.exception.ModelListenerException;
import com.liferay.portal.kernel.model.BaseModelListener;
import com.liferay.portal.kernel.model.ModelListener;

import org.osgi.service.component.annotations.Component;

/**
 * @author Adam Brandizzi
 */
@Component(
	immediate = true,
	service = ModelListener.class
)
public class AxeraWedeployConnector extends BaseModelListener<CommerceOrder> {

	@Override
	public void onAfterUpdate(CommerceOrder order)
			throws ModelListenerException {


		if (order.getOrderStatus() ==
			CommerceOrderConstants.ORDER_STATUS_COMPLETED) {

			System.out.println("Order completed! " + order);
		}
		
		super.onAfterUpdate(order);
	}

}