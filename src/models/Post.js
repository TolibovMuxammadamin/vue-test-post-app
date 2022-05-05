import Base from "@/models/Base";

export default class Post extends Base {
    static apiUrl = "posts";

    constructor({
                    id,
                    title,
                    body
                } = {
        id: null,
        title: "",
        body: "",
    }) {
        super(id);
        this.title = title;
        this.body = body;
        this.userId = 1;
    }

    /**
     *
     * @param {Object} params
     * @returns {Promise<Object{data: Array, total: number}>}
     */
    static async fetchList (params = null) {
        const res = await super.fetchList(params);
        return {
            data: res.data,
            total: res.headers['x-total-count']
        }
    }

    static async fetchPostComments (id) {
        try {
            const {data} = await this.axiosIns.get(`${this.apiUrl}/${id}/comments`);
            return data;
        } catch (err) {
            throw err;
        }
    }
}
