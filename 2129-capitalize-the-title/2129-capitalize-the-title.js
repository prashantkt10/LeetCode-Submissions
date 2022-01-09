/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    title=title.split(' ');
    for(let i=0; i<title.length; i++) {
        let current=title[i];
        if(current.length<3) {
            current=current.toLowerCase();
            title[i]=current;
            continue;
        }
        let trans='';
        for(let x=0; x<current.length; x++) {
            let fL=current[x];
            if(x==0) {
                trans+=fL.toUpperCase(); 
                continue;
            }
            trans+=fL.toLowerCase(); 
        }
        title[i]=trans;
    }
    return title.join(' ');
};