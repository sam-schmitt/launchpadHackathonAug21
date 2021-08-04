import client from "./client";

const endpoint = "/todo";

const getDone = () => client.get(`${endpoint}/donePosts`);

const getNotDone = () => client.get(`${endpoint}/notDonePosts`);

const post = (item) => client.post(`${endpoint}/post`, { item });

const deleteItem = (itemID) =>
	client.post(`${endpoint}/deleteItem`, { itemID });

const completeItem = (itemID) =>
	client.post(`${endpoint}/completeItem`, { itemID });

const todoApi = {
	getDone,
	getNotDone,
	post,
	deleteItem,
	completeItem,
};
export default todoApi;
