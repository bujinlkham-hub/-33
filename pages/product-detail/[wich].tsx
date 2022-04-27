import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ProductDetail } from "../../Domains/productDetail";

export default function CreatorsPage() {
  const router = useRouter();
  const wich = router.query.wich;

  const [data, setData] = useState<any>();
  const [cat, setCat] = useState<any>();

  useEffect(() => {
    axios
      .get(`http://192.168.1.19:247/single_product?productId=${wich}`)
      .then((res) => {
        console.log(res);
        setData(res.data.data);
        setCat(data.category);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("single", data);
  }, [wich]);
  if (!data) {
    return null;
  }
  return <ProductDetail data={data} />;
}
