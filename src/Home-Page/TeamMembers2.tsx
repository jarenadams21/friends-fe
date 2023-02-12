import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const teamMembers2 = [
  {
    name: "Jaren Adams",
    photo: require("./Jaren.jpg"),
  },
  {
    name: "Caleb Lee",
    photo: require("./Kale.jpg"),
  },
  {
    name: "Tunwa (Win) Tongtawee",
    photo: require("./Win.jpg"),
  },
  {
    name: "Tristen Li",
    photo: require("./Tris.jpg"),
  },
  {
    name: "Lucy",
    photo: require("./Lucy.jpg"),
  },
  {
    name: "Cole Harvey",
    photo: require("./Cole.jpg"),
  },
];
function TeamMembers2() {
  return (
    <div className="container">
      <div className="row">
        {teamMembers2.map((member, index) => {
          return (
            <div key={index} className="col-lg-4 mb-4">
              <a href="#" className="group relative block bg-black no-underline">
                <img
                  alt="Developer"
                  src={member.photo}
                  className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div className="relative p-8">
                  <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                    Developer
                  </p>

                  <p className="text-2xl font-bold text-white">{member.name}</p>

                  <div className="mt-64">
                    <div
                      className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      <p className="text-sm text-white">
                        some text here
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TeamMembers2;
