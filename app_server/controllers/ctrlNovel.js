const novellist = function(req, res){
    res.render('novel',{
        novels:
            [
                {image:'images/novel/call_of_the_wild.jpg', author:'Jack London', name:'The Call Of The Wild'},
                {image:'images/novel/les_miserables.jpg', author:'Victor Hugo', name:'Les Miserables'},
                {image:'images/novel/sherlock_holmes.jpg', author:'Arthur Conan Doyle', name:'The Adventures of Sherlock Holmes'},
                {image:'images/novel/dracula.jpg', author:'Bram Stoker', name:'Dracula'},
                {image:'images/novel/treasure_island.jpg', author:'Robert Louis Stevenson', name:'Treasure Island'},
                {image:'images/novel/little_lady.jpg', author:'Jack London', name:'The Little Lady of the Big House'},
                {image:'images/novel/wizard_of_oz.jpg', author:'Lyman Frank Baum', name:'The Wonderful Wizard of Oz'}
            ]});
};
module.exports = {
    novellist
};