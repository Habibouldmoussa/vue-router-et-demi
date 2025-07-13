import { ref, h } from "vue-demi";

type AdminDashboard = {
  name: string;
  count?: number;
  setup: () => void;
  render: () => void;
};

const AdminDashboard: AdminDashboard = {
  name: "AdminDashboard",
  setup() {
    console.log("AdminDashboard setup called");
    const count = ref(1);
    return { count };
  },
  render() {
    return h("h1", `Plugin Component: ${this.count}`);
  },
};

export default AdminDashboard;
