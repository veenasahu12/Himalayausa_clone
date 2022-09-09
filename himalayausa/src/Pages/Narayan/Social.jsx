import React from "react";
import { Text } from "@chakra-ui/react";
import { BsInstagram } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";


const Social = () => {
  return (
    <div
      style={{
        padding: "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginTop: "-80px"
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Text fontSize="30px" fontWeight="500">
          Follow us @himalayausa
        </Text>
        <div style={{ display: "flex", gap: "20px" }}>
          <a href="https://www.instagram.com/himalayausa/">
            <BsInstagram size={"30px"} />
          </a>

          <a href="https://www.facebook.com/HimalayaUSA">
            <ImFacebook size={"30px"} />
          </a>
        </div>
      </div>

      <br />
      <br />
      <a href="https://www.instagram.com/himalayausa/">
        <div
          style={{
            display: "flex",
            width: "285px",
            height: "285px",
            gap: "10px"
          }}
        >
          <img
            src="https://scontent.cdninstagram.com/v/t51.2885-15/279060214_1028931348020017_977861928696093797_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=DVfakKA1_fQAX_2EDRb&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-P9wiu-Ml1i8IWVryxpoFAy2Z6r3b3RmEBUxTQERVKPw&oe=631E94C7"
            alt=""
          />
          <img
            src="https://scontent.cdninstagram.com/v/t51.2885-15/277292932_5613162492028340_2851075865814001728_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=xJswgax8eNkAX-8Aygv&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT8zHBqLV1nTujgDoo2SKAtjYuOW2hZZdLGDGU_VGYygNQ&oe=631ECC4B"
            alt=""
          />
          <img
            src="https://scontent.cdninstagram.com/v/t51.2885-15/210602775_2989071524684964_2920882526894167214_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=kR7ES_RlSjcAX_Gav__&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT97xL6fvN6bnroPZm_ciOz-zguKVwxO1DUP5za5HT-uoQ&oe=631E7185"
            alt=""
          />
          <img
            src="https://scontent.cdninstagram.com/v/t51.2885-15/204274359_2975479076040360_2380187042423867081_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=aperHOsh8e0AX9lKhC6&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT9YKkBnCSxEqYxEVpjTKjl70sMi52lsiItHTUGsJgg6uQ&oe=631EF72B"
            alt=""
          />
        </div>
      </a>
      
    </div>
  );
};

export default Social;
