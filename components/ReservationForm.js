Vue.component("ReservationForm", {
  template: `<div>
    <div class="container mb-3">
    <MainTitle title="Crear una nueva reservacion :)"></MainTitle>
    <form action="">
        
        <label for="code" class="form-label">Código de Reservación:</label>
        <input v-model="code" @keyup.enter="newReservation" type="number" name="code" class="form-control" required>

        <label for="name" class="form-label">Nombre:</label>
        <input v-model="name" @keyup.enter="newReservation" type="text" name="name" class="form-control" required>

        <label for="destination" class="form-label">Destino:</label>
        <input v-model="destination" @keyup.enter="newReservation" type="text" name="destination" class="form-control" required>

        <label for="passengers" class="form-label">Número de Pasajeros:</label>
        <input v-model="passengers" @keyup.enter="newReservation" type="number" name="passengers" class="form-control" min="1" max="10" required>

        <input @click="newReservation" type="button" value="Nueva reserva" class="btn btn-secondary">
    </form>
    </div>
    
    <div class="data container">
    <MainTitle title="Reservas"></MainTitle>
    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th>ID</th>
                <th>Codigo de reservacion</th>
                <th>Nombre</th>
                <th>Destino</th>
                <th>Pasajeros</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(reservation, index) in reservations" :key="index">
                <td>{{ index + 1 }}</td>

                <td>
                    <span v-if="formUpdate && idUpdate == index">
                        <input v-model="codeUpdate" type="text" class="form-control">
                    </span>
                    <span v-else>
                        {{ reservation.code }}
                    </span>
                </td>

                <td>
                    <span v-if="formUpdate && idUpdate == index">
                        <input v-model="nameUpdate" type="text" class="form-control">
                    </span>
                    <span v-else>
                        {{ reservation.name }}
                    </span>
                </td>

                <td>
                <span v-if="formUpdate && idUpdate == index">
                        <input v-model="destinationUpdate" type="text" class="form-control">
                    </span>
                    <span v-else>
                        {{ reservation.destination }}
                    </span>
                </td>

                <td>
                <span v-if="formUpdate && idUpdate == index">
                        <input v-model="passengersUpdate" type="text" class="form-control">
                    </span>
                    <span v-else>
                        {{ reservation.passengers }}
                    </span>
                </td>

                <td>
                    <span v-if="formUpdate && idUpdate == index">
                        <button @click="saveUpdate(index)" class="btn btn-success">Guardar</button>
                    </span>
                    <span v-else>
                        <button @click="seeFormUpdate(index)" class="btn btn-dark">Actualizar</button>
                        <button @click="deleteReservation(index)" class="btn btn-secondary">Borrar</button>
                    </span>
                </td>
            </tr>
        </tbody>
    </table>
    </div>
    </div>`,
  data() {
    return {
      code: "",
      name: "",
      destination: "",
      passengers: "",
      formUpdate: false,
      idUpdate: -1,
      codeUpdate: '',
      nameUpdate: '',
      destinationUpdate: '',
      passengersUpdate: '',
      reservations: [],
    };
  },
  methods: {
    newReservation() {
      this.reservations.push({
        code: this.code,
        name: this.name,
        destination: this.destination,
        passengers: this.passengers,
      });
      this.code = "";
      this.name = "";
      this.destination = "";
      this.passengers = "";
    },
    seeFormUpdate: function (reservation_id) {
        this.idUpdate = reservation_id;
        this.codeUpdate = this.reservations[reservation_id].code;
        this.nameUpdate = this.reservations[reservation_id].name;
        this.destinationUpdate = this.reservations[reservation_id].destination;
        this.passengersUpdate = this.reservations[reservation_id].passengers;
        this.formUpdate = true;
    },
    deleteReservation: function (reservation_id) {
        this.reservations.splice(reservation_id, 1);
    },
    saveUpdate: function (reservation_id) {
        this.formUpdate = false;
        this.reservations[reservation_id].code = this.codeUpdate;
        this.reservations[reservation_id].name = this.nameUpdate;
        this.reservations[reservation_id].destination = this.destinationUpdate;
        this.reservations[reservation_id].passengers = this.passengersUpdate;
    }
  },
});
