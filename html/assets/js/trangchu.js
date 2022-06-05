// JS Tin tức sự kiện
var newsEvent= document.querySelectorAll('.newsEvent__item')
var newEventOpen=document.querySelectorAll('.newEvent__contentItem')
for(var i=0;i<newsEvent.length;i++){
    newsEvent[i].addEventListener('click',function(event){
            for(var j=0;j<newsEvent.length;j++){
                newsEvent[j].classList.remove('background__Checked') 
            }
            event.target.classList.add('background__Checked')
            for(var j=0;j<newsEvent.length;j++){
                if(newsEvent[j].className.indexOf('background__Checked')>0){
                    newEventOpen[j].classList.remove('newEventClose')
                    for(var k=0;k<newEventOpen.length;k++){
                        if(j==k){
                            continue
                        }else{
                            newEventOpen[k].classList.add('newEventClose')
                        }
                    }
                }
            }
        }
    )   
}

// TopicClose
var topicMore= document.querySelectorAll('.topicMore')
var TopicListOpen=document.querySelectorAll('.TopicList')
var projectTopic= document.querySelectorAll('.projectTopic')
var learnMore= document.querySelectorAll('.TopicMoreButton')
console.log(TopicListOpen)

projectTopic[0].addEventListener('click',function(event){
         if(topicMore[0].className.indexOf('TopicClose')>0){
            learnMore[1].classList.add('MoreButton-none')
            learnMore[0].classList.remove('MoreButton-none')
         }else{
            learnMore[1].classList.remove('MoreButton-none')
            learnMore[0].classList.add('MoreButton-none')
         }
        for(var j=0;j<newsEvent.length;j++){
            projectTopic[j].classList.remove('projectChecked') 
        }
        event.target.classList.add('projectChecked')
        for(var j=0;j<projectTopic.length;j++){
            if(projectTopic[j].className.indexOf('projectChecked')>0){
                TopicListOpen[j].classList.remove('TopicClose')
                for(var k=0;k<TopicListOpen.length;k++){
                    if(j==k){
                        continue
                    }else{
                        TopicListOpen[k].classList.add('TopicClose')
                    }
                }
            }
        }
    }
) 
projectTopic[1].addEventListener('click',function(event){
    if(topicMore[1].className.indexOf('TopicClose')>0){
        learnMore[1].classList.add('MoreButton-none')
        learnMore[0].classList.remove('MoreButton-none')
     }else{
        learnMore[1].classList.remove('MoreButton-none')
        learnMore[0].classList.add('MoreButton-none')
     }
    for(var j=0;j<newsEvent.length;j++){
        projectTopic[j].classList.remove('projectChecked') 
    }
    event.target.classList.add('projectChecked')
    for(var j=0;j<projectTopic.length;j++){
        if(projectTopic[j].className.indexOf('projectChecked')>0){
            TopicListOpen[j].classList.remove('TopicClose')
            for(var k=0;k<TopicListOpen.length;k++){
                if(j==k){
                    continue
                }else{
                    TopicListOpen[k].classList.add('TopicClose')
                }
            }
        }
    }
}
) 
projectTopic[2].addEventListener('click',function(event){
    if(topicMore[2].className.indexOf('TopicClose')>0){
        learnMore[1].classList.add('MoreButton-none')
        learnMore[0].classList.remove('MoreButton-none')
     }else{
        learnMore[1].classList.remove('MoreButton-none')
        learnMore[0].classList.add('MoreButton-none')
     }
    for(var j=0;j<newsEvent.length;j++){
        projectTopic[j].classList.remove('projectChecked') 
    }
    event.target.classList.add('projectChecked')
    for(var j=0;j<projectTopic.length;j++){
        if(projectTopic[j].className.indexOf('projectChecked')>0){
            TopicListOpen[j].classList.remove('TopicClose')
            for(var k=0;k<TopicListOpen.length;k++){
                if(j==k){
                    continue
                }else{
                    TopicListOpen[k].classList.add('TopicClose')
                }
            }
        }
    }
}
) 


    //js Click Button Open More
var TopicList=document.querySelectorAll('.TopicList')
var topicMore= document.querySelectorAll('.topicMore')
console.log(topicMore)
learnMore[0].addEventListener('click',function(event){
    for(var i=0;i<topicMore.length;i++){
        if(TopicList[i].className.indexOf('TopicClose')>0){
            continue
        }
        if(topicMore[i].className.indexOf('TopicClose')>0){
            topicMore[i].classList.remove('TopicClose')
            learnMore[1].classList.remove('MoreButton-none')
            learnMore[0].classList.add('MoreButton-none')
        }
    }
})
learnMore[1].addEventListener('click',function(event){
    for(var i=0;i<topicMore.length;i++){
        if(TopicList[i].className.indexOf('TopicClose')>0){
            continue
        }
        if(topicMore[i].className.indexOf('TopicClose')!=0){
            topicMore[i].classList.add('TopicClose')
            learnMore[1].classList.add('MoreButton-none')
            learnMore[0].classList.remove('MoreButton-none')
        }
    }
})

