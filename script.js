function addBook(element){
	var li = element.parentElement;
	li.classList.toggle('selected');
	
	var inner = li.parentElement;
	var liList = inner.getElementsByTagName('li');
	
	var checked = 0;
	for (var i=0; i < liList.length; i++){
		var input = liList[i].getElementsByTagName('input')[0];
		if (input.checked){
			checked++;
		}
	}
	
	var header = inner.parentElement.previousElementSibling;
	var span = header.getElementsByClassName('number')[0];
	span.innerText = checked + '/' + liList.length;
	
	var allBooks = document.getElementsByClassName('book');
	for (var i=0; i < allBooks.length; i++){
		if (allBooks[i].checked){
			document.getElementsByClassName('button-ready')[0].disabled = false;
			return;
		}		
	}
	document.getElementsByClassName('button-ready')[0].disabled = true;
}

function headerClick(element){
	var ul = element.nextElementSibling;
	
	ul.classList.toggle('hidden');
	
	if (ul.style.maxHeight){
      ul.style.maxHeight = null;
    } else {
      ul.style.maxHeight = ul.scrollHeight + "px";
    } 

	if (!ul.classList.contains('hidden')){
		var allListUl = document.getElementsByClassName('list');
		for (var i=0; i < allListUl.length; i++){
			if (allListUl[i] != ul){
				allListUl[i].classList.add('hidden');
				allListUl[i].style.maxHeight = null;
			}
		}
	}
}

function nextHeader(element){
	var nextHeader = element.parentElement.parentElement.nextElementSibling;
	headerClick(nextHeader);
}

function closeInfo(element){
	element.parentElement.classList.add('hidden');
}

function showInfo(element){
	document.getElementsByClassName('info')[0].classList.remove('hidden');
}