function DefaultValue(Props) {
  return (
    <>
      <h1>It's Default Props passed from another component</h1>
      Welcome  {Props.name}
    </>
  );
}


DefaultValue.defaultProps =
{
  name: "Guest"
};

export default DefaultValue;
