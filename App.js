const Inicio = {
    template: '<div><ReservationTable></ReservationTable></div>'
  };
  const Create = {
    template: '<div><ReservationForm></ReservationForm></div>'
  };

  const routes = [
    { path: "/", component: Inicio },
    { path: "/create", component: Create },
  ];

  const router = new VueRouter({ routes });

  new Vue({
    router,
  }).$mount("#app");
  