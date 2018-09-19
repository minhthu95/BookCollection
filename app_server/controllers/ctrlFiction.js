const fictionlist = function(req, res){
    res.render('fiction',{
        fictions:
            [
                {author:'Francis Scott Fitzgerald', name:'The Great Gatsby'},
                {author:'William Shakespeare', name:'Romeo And Juliet'},
                {author:'Graf Leo Tolstoy', name:'Anna Karenina'},
                {author:'Mark Twain', name:'Adventures of Huckleberry Finn'},
                {author:'Charles Dickens', name:'A Tale of Two Cities'},
                {author:'William Shakespeare', name:'Hamlet'},
                {author:'Alexandre Dumas', name:'The Count of Monte Cristo'}
            ]});
};
module.exports = {
    fictionlist
};