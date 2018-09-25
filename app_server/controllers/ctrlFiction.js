const fictionlist = function(req, res){
    res.render('fiction',{
        fictions:
            [
                {image:'images/fiction/the_great_gatsby.jpg',author:'Francis Scott Fitzgerald', name:'The Great Gatsby'},
                {image:'images/fiction/romeo_and_juliet.jpg',author:'William Shakespeare', name:'Romeo And Juliet'},
                {image:'images/fiction/anna_karenina.jpg',author:'Graf Leo Tolstoy', name:'Anna Karenina'},
                {image:'images/fiction/huckleberry_finn.jpg',author:'Mark Twain', name:'Adventures of Huckleberry Finn'},
                {image:'images/fiction/two_cities.jpg',author:'Charles Dickens', name:'A Tale of Two Cities'},
                {image:'images/fiction/hamlet.jpg', author:'William Shakespeare', name:'Hamlet'},
                {image:'images/fiction/monte_cristo.jpg', author:'Alexandre Dumas', name:'The Count of Monte Cristo'}
            ]});
};
module.exports = {
    fictionlist
};