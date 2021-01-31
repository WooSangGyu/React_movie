import React from "react";

// 첫번째 인자로 props를 받는다 -> { fav } == props.fav
function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    name: "Kimchi",
    image:
      "https://w.namu.la/s/2958e0d7304f1b744021983c55747de2840e0e59a1f3d677d9315f5bad981f002769ce59921aea02b2dd23b5384a0ce30864fe6d84ea1b9aaed80fb3b5f60b6de4a6c9a79a24e7e7ea23a2a4cb1558a6c7379e8ec0ba038a3c5a39a723080b9607e499d06609526c25dfeaee70104955",
  },
  {
    name: "Samgyeosal",
    image:
      "https://ww.namu.la/s/bf2527dfd9717aea7f08232f93199df34d308181c08223628b862f90b4d77593479ba3d8b7fe6b1e781c731472c3679113e43dd1c93b608ca5c1f069386f24f795ceb4eb2570230a7923423c654618ffc5fed3d97de77c8e5ba22380e4e663a654cc08765c80fca554bed79c7401d12f",
  },
  {
    name: "Bibimbap",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/330px-Dolsot-bibimbap.jpg",
  },
  {
    name: "ramen",
    image:
      "https://w.namu.la/s/9f15f198aab1b14c8aa47e96a91a9d03331ecb7b5b892c803159d39b0d77ab4be30e2f15f66191284d7dad8371989329cc1c80810745e980a6949ae5e3589df6c2d6935c8e781c80b731f923927078a9362c45acb028adc90486b9153709786b",
  },
];

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
