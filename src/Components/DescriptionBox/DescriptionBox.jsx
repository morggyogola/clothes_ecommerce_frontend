import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="description-box">
      <div className="description-box-navigator">
        <div className="description-box-nav-box">Description</div>
        <div className="description-box-nav-box-fade">Reviews (122)</div>
      </div>
      <div className="description-box-description">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
          accusamus dolor aperiam est blanditiis nisi harum, at sequi sit
          laborum facilis. Itaque exercitationem repudiandae excepturi cumque,
          enim temporibus ullam dolore?
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            facere totam, earum minus temporibus, ut non asperiores voluptatibus
            tenetur sapiente placeat omnis quibusdam in, impedit ratione cum
            provident suscipit fugit!
          </p>
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
