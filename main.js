const API_KEYS = `ttb02jw2356001`;
let url = new URL(`http://www.aladin.co.kr/ttb/api/ItemLookUp.aspx?ttbkey=${API_KEYS}&itemIdType=ISBN&ItemId=9780393061314&output=xml&Version=20131101&OptResult=ebookList,usedList,reviewList`);


const getBookdata = async() => {
  const response = await fetch(url);
  const data = await response.json();
  console.log("data", data);
}
getBookdata();