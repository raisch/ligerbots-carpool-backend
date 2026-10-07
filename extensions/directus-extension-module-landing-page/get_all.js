function fetch_all_pages() {
  api
    .get("/items/docs?fields=title,slug,icon,color,body")
    .then((rsp) => {
      all_pages.value = [];
      rsp.data.data.forEach((item) => {
        all_pages.value.push({
          label: item.title,
          uri: item.slug,
          to: `/landing-page`,
          icon: item.icon,
          color: item.color,
          value: item.body,
        });
      });
      console.log(all_pages.value);
    })
    .catch((error) => {
      console.log(error);
    });
}
