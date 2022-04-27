import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CategoryDetail } from "../Domains/categoryDetail";

export default function CreatorsPage() {
  const router = useRouter();
  const id = router.query.id;
  const [data, setData] = useState<any>();
  const [cat, setCat] = useState<any>();

  useEffect(() => {
    axios
      .get(`http://192.168.1.19:247/category_product?category=${id}`)
      .then((res) => {
        console.log(res);
        setData(res.data);
        setCat(data.category);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  if (!data) {
    return null;
  }
  return <CategoryDetail data={data.data} cat={cat} />;
}
