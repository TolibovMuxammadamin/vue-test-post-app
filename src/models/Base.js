import api from "../services/api";

export default class Base {
    static apiUrl = "";
    static axiosIns = api;

    constructor (id = null) {
        if (id)
            this.id = id;
    }

    static fetchList (params = null) {
        try {
            return this.axiosIns.get(this.apiUrl, { params });
        } catch (err) {
            throw err;
        }
    }

    static async fetchById (id) {
        try {
            const {data} = await this.axiosIns.get(`${this.apiUrl}/${id}/`);
            return data;
        } catch (err) {
            throw err;
        }
    }

    async create (sendingData = this) {
        try {
            const {data} = await this.constructor.axiosIns.post(this.constructor.apiUrl, sendingData);
            return data;
        } catch (err) {
            throw err;
        }
    }

    async update(updatingData = this) {
        try {
            const { data } = await this.constructor.axiosIns.put(`${this.constructor.apiUrl}/${this.id}`, updatingData);
            return data;
        } catch (err) {
            throw err;
        }
    }

    static async remove(id) {
        try {
            return await this.axiosIns.delete(`${this.apiUrl}/${id}/`);
        } catch (error) {
            throw error;
        }
    }
}
