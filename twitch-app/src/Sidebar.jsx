import React from "react";
import Channel from "./Channel";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h5>FOLLOWED CHANNELS</h5>
        <Channel
          avatar="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s900-c-k-c0x00ffffff-no-rj"
          name="cleverprogrammer"
          followers="820k"
        />
        <Channel
          avatar="https://scontent.fccu19-1.fna.fbcdn.net/v/t1.0-1/c54.0.200.200a/p200x200/74632367_2420296131553169_4752296019268468736_o.jpg?_nc_cat=107&ccb=2&_nc_sid=7206a8&_nc_ohc=IbcbgMezTRMAX-Qj-AN&_nc_ht=scontent.fccu19-1.fna&tp=27&oh=df187307a8cf3c279c4f22e962552669&oe=5FC07989"
          name="sachin"
          followers="200k"
        />
        <h5>RECOMMENDED CHANNELS</h5>
        <Channel
          avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTe9JbMKyz0uDd4587Ek6Zy1ef4JHfEV5SFCA&usqp=CAU"
          name="@singhsachin8198"
          followers="220"
        />
        <p className="sidebar__topShowMore">Show More</p>
      </div>
      <div className="sidebar__bottom">
        <div className="sidebar__bottomContainer">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search to Add Friends" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
