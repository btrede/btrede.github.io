// Update the links
 const links = [
  {
    label: "Week01 Notes",
    url: "Week01/index.html"
}, {
    label: "Week02 Notes",
    url: "Week02/index.html"
}, {
  label: "Week03 Notes",
  url: "Week03/index.html"
}, {
  label: "Week04 Notes",
  url: "Week04/index.html"
}, {
  label: "Week05 Notes",
  url: "Week05/index.html"
}
  ];
  
  function createLinks() {
    links.forEach(link => {
        let listItem = document.createElement("li");
        listItem.innerHTML = `<a href="${link.url}">${link.label}</a>`;
        document.getElementById("links").appendChild(listItem);
    });
}; 


