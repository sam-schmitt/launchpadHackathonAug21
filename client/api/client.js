import { create } from "apisauce";

const PORT = "4000";

const apiClient = create({
	baseURL: `http://localhost:${PORT}/`,
});

export default apiClient;
