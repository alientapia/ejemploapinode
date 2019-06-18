
const router = require('express-promise-router')();

const {
    index,
    newUser,
    get_user,
    update_user,
    delete_user
} = require('../Controllers/user');

router.get('/', index);
router.post('/', newUser);
router.get('/:id', get_user);
router.put('/:id', update_user);
router.delete('/:id', delete_user);

module.exports = router;