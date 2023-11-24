function setAttrValue(attributeCode, attributeValue) {
  var attribute = EdocsApi.getAttributeValue(attributeCode);
  attribute.value = attributeValue;
  EdocsApi.setAttributeValue(attribute);
}

function onChangeCustomerCategoryVIP() {
  var CustomerCategoryVIP = EdocsApi.getAttributeValue("CustomerCategoryVIP")?.value;
  switch (CustomerCategoryVIP) {
    case "High on local level":
      setAttrValue("DiscountVIP", "1");
      break;

    case "High on country level":
      setAttrValue("DiscountVIP", "3");
      break;

    case "High on international level":
      setAttrValue("DiscountVIP", "6");
      break;

    default:
      setAttrValue("DiscountVIP", null);
      break;
  }
}
