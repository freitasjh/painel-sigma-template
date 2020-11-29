import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/sistema_venda/v1/",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    "X-TenantID": "teste",
  },
});
