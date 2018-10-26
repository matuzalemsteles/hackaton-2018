package com.liferay.commerce.axera.wedeploy.connector;

import com.liferay.dynamic.data.mapping.model.DDMFormInstanceRecord;
import com.liferay.dynamic.data.mapping.model.Value;
import com.liferay.dynamic.data.mapping.storage.DDMFormFieldValue;
import com.liferay.dynamic.data.mapping.storage.DDMFormValues;
import com.liferay.portal.kernel.exception.ModelListenerException;
import com.liferay.portal.kernel.exception.PortalException;
import com.liferay.portal.kernel.json.JSONObject;
import com.liferay.portal.kernel.model.ModelListener;
import com.liferay.portal.kernel.util.ListUtil;

import java.io.IOException;

import java.math.BigDecimal;

import java.util.List;
import java.util.Map;

import org.osgi.service.component.annotations.Component;

/**
 * @author Adam Brandizzi
 */
@Component(immediate = true, service = ModelListener.class)
public class AxeraFormsWedeployConnector
	extends BaseWeDeployConnector<DDMFormInstanceRecord> {

	@Override
	public void onAfterUpdate(DDMFormInstanceRecord record)
		throws ModelListenerException {

		System.out.println("litened!");

		try {
			DDMFormValues values = record.getDDMFormValues();

			Map<String, List<DDMFormFieldValue>> valuesMap =
				values.getDDMFormFieldValuesMap();

			System.out.println(valuesMap);

			String userName = getFieldValue(valuesMap, "Nombre");

			if (userName == null) {
				System.out.println("Username is null");

				return;
			}

			System.out.println(userName);

			String item = getFieldValue(valuesMap, "Producto");

			if (item == null) {
				System.out.println("Producto is null");

				return;
			}

			System.out.println(item);

			String date = getFieldValue(valuesMap, "Fecha");

			if (date == null) {
				System.out.println("Date is null");

				return;
			}

			System.out.println(date);

			String strPrice = getFieldValue(valuesMap, "numeric");

			System.out.println(strPrice);

			if (strPrice == null) {
				System.out.println("Price is null");

				return;
			}

			BigDecimal price = new BigDecimal(strPrice);

			JSONObject json = createItemJSON(item, price, userName, date);

			sendToWeDeploy(json);

		} catch (PortalException | IOException e) {
			throw new ModelListenerException(e);
		}
	}

	protected String getFieldValue(
		Map<String, List<DDMFormFieldValue>> valuesMap, String fieldName) {

		List<DDMFormFieldValue> values = valuesMap.get(fieldName);

		if (ListUtil.isEmpty(values)) {
			return null;
		}

		DDMFormFieldValue firstValue = values.get(0);

		System.out.println(firstValue);

		if (firstValue == null) {
			return null;
		}

		Value value = firstValue.getValue();

System.out.println(value);
		String realValue = value.getString(value.getDefaultLocale());

		return realValue;
	}

}