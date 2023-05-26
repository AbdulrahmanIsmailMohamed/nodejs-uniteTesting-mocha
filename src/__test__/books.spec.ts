import chai from "chai";
import chaiHttp from "chai-http";

import { app } from "../index";

chai.use(chaiHttp);
const should = chai.should();

describe("Test Books", () => {
    describe("Get /books", () => {
        it("should return all books", (done) => {
            chai.request(app)
                .get("/books")
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.an("array")
                    done()
                })
        })
    })
})