//create tables
module.exports = {
queryString: 'CREATE TABLE IF NOT EXISTS videodata (videoId VARCHAR, imageId VARCHAR, views VARCHAR, date VARCHAR, relativeDate VARCHAR)',
//insert data -- do with a loop
queryString2: `INSERT INTO videodata(videoId, imageId, views, date, relativeDate) values('tg00YEETFzg', '4.png', '960M', 'Sptember 22, 2011', '10')`,
//get data
queryString3:'select * from videonames inner join videodata using(videoId)',
//delete tabes
queryString4: 'drop table thumbs',
queryString5: 'CREATE TABLE IF NOT EXISTS thumbs (videoId VARCHAR, likes ARCHAR, dislikes VARCHAR)',
queryString6: `INSERT INTO thumbs(videoId, likes, dislikes) values('LfRNRymrv9k', '0', '0')`,queryString7: `DELETE FROM thumbs WHERE videoId:'LfRNRymrv9k`,
queryString8: 'select * from videonames inner join videodata using(videoId) inner join thumbs using(videoId)',
// queryString9: 'UPDATE thumbs SET likes = likes + 1 WHERE videoId = tg00YEETFzg RETURNING *',
// queryString10: 'UPDATE thumbs SET likes = likes + 1 WHERE videoId = PeonBmeFR8o RETURNING *',
// queryString11: 'UPDATE thumbs SET likes = likes + 1 WHERE videoId = IGrV5mvIY8w RETURNING *',
// queryString12: 'UPDATE thumbs SET likes = likes + 1 WHERE videoId = m3-hY-hlhBg RETURNING *',
// queryString13: 'UPDATE thumbs SET likes = likes + 1 WHERE videoId = LfRNRymrv9k RETURNING *',
queryString14: function (videoId) {
    return `UPDATE thumbs SET likes = likes + 1 WHERE videoId = ${videoId} RETURNING *`
}
}