const BenefitCard = (data) => {
    console.log(data)
  return (
    <div class="col-lg-4 col-sm-6">
      <div class="item">
        {" "}
        <span class="icon feature_box_col_one">{data.data.icon}</span>
        <h6>{data.data.title}</h6>
        <p>{data.data.info}</p>
      </div>
    </div>
  );
};
export default BenefitCard
