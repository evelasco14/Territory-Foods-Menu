import Image from "next/image";
const MenuCard = ({ menuData }) => {
  return (
    <div className="container-menu">
      <div className="d-flex justify-center flex-wrap">
        {menuData &&
          menuData.map((menu) => (
            <div key={menu.id} className="card-item">
              <div className="img-size">
                <Image
                  className="bdr-radius-4-0"
                  alt="menu item"
                  width="240"
                  height="160"
                  src={menu.img}
                />
              </div>
              <div>
                <div className="mb-8">
                  <span className="text-16 text-bold text-uppercase text-SuperGroteskPro ">
                    {menu.title}
                  </span>
                </div>
                <p>by {menu.chef}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MenuCard;
