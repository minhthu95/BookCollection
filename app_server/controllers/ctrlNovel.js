const novellist = function(req, res){
    res.render('novel',{
        novels:
            [
                {author:'Jack London', name:'The Call Of The Wild'},
                {author:'Victor Hugo', name:'Les Miserables'},
                {author:'Arthur Conan Doyle', name:'The Adventures of Sherlock Holmes'},
                {author:'Bram Stoker', name:'Dracula'},
                {author:'Robert Louis Stevenson', name:'Treasure Island'},
                {author:'Jack London', name:'The Little Lady of the Big House'},
                {author:'Lyman Frank Baum', name:'The Wonderful Wizard of Oz'}
            ]});
};
module.exports = {
    novellist
};