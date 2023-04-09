const Footer = () => {
  const today = new Date();

  return (
    <footer>
      <h5 className="m-5 pb-5 text-danger" >Team Allocation App - {today.getFullYear()}</h5>
    </footer>
  );
}

export default Footer;