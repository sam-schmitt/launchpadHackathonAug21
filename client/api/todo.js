import client from "./client";

const endpoint = "/todo";

const getDone = () => client.get(`${endpoint}/donePosts`);

const getNotDone = () => client.get(`${endpoint}/notDonePosts`);

const post = (item) => client.post(`${endpoint}/notDonePosts`, { item });

const deleteItem = (itemID) =>
	client.post(`${endpoint}/deleteItem`, { itemID });

const completeItem = (itemID) =>
	client.post(`${endpoint}/completeItem`, { itemID });

const chatsApi = {
	getDone,
	getNotDone,
	post,
	deleteItem,
	completeItem,
};
export default chatsApi;
