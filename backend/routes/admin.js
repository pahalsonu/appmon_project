const express = express();
const router = express.router();

app.use(express.json);

router.get('/registeration', async (req, res)=>{

    let { firstName, lastName, email, emailtoken, password, role } = req.body;

    const adminreg = {
        firstName,
        lastName,
        email,
        emailtoken,
        password
    };




} )