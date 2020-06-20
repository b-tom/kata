function songDecoder(song){
    let cleanSong = "";
    for (let i=0 ; i<song.length ; i++){
      if(song[i]+song[i+1]+song[i+2]==="WUB"){
        cleanSong += " ";
      }else if(song[i-1]+song[i]+song[i+1]==="WUB"){
        continue;
      }else if(song[i-2]+song[i-1]+song[i]==="WUB"){
        continue;
      }
      else{cleanSong += song[i]}
    }
    let cleanerSong = "";
    for(let i=0; i<cleanSong.length ; i++){
      if(cleanSong[i]=== " " && cleanSong[i-1]===" "){
        continue;
      }else{cleanerSong += cleanSong[i]}
    }
    return cleanerSong.trim();
}