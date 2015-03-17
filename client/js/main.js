
$(document).ready(function() {
	// get default folder list
	$.ajax({
		 url:'/documents',
		 success:initObj,
		 error: function(xhr, options, thrownError) {
			alert(thrownError + ':' + options + 'xhr:' + xhr);
		 }
	});
});

function populateChildren(folderId, folderLink) {
	var childrenList='';
	var $folderLink = folderLink;
	//console.log($folderLink);
	if ((!$folderLink.next('ul').length)) {
		$.ajax({
			 url:'/documents/?parentId='+folderId,
			 success:function(children) {
				//console.log(children);
				//list all the children under the folder
				$.each(children, function(index) {
					var child = children[index];
					//console.log(child);
					if (child) {
						if(child.isFolder) {
							childrenList += '<li data-number="'+child.number+'" data-name="'+child.name+'" data-id="'+child.id+'"><a href="#" class="folderType" id="'+child.id+'">' + child.name + '</a></li>';
						} else {
							var roundedFileSize = Math.round(child.fileSize/1000000);
							childrenList += '<li class="fileType" rel="popover" data-toggle="popover" title="'+child.number+'" data-content="File Size: '+roundedFileSize+'MB" data-id="'+child.id+'"><span>'+child.number+ '</span>' +child.name+'</li>';
						}
					}
				});
				// add the HTML
				if(childrenList) {
					$folderLink.parent().addClass('open').append('<ul class="open">' + childrenList + '</ul>');
				}
				//bind the links to query the API
				resetLinks();
				//bind the documents to the Bootstrap popover tooltip
				$('[data-toggle="popover"]').popover({placement:'left'});
			 },
			 error: function(xhr, options, thrownError) {
				alert(thrownError + ':' + 'No such folder.');
			 }
		});
	} else {
		//do not call the api again, if the list exists, open and close on the click
		$folderLink.next('ul').toggleClass('open');
		$folderLink.parent().toggleClass('open');
	}
}
//initialise folder list
function initObj(data) {
	var item;
	var results = data;
	//console.log(results);
	$.each(results, function(index) {
		var id = results[index].id;
		var parentId = results[index].parentId;
		var isFolder = results[index].isFolder;
		var name = results[index].name;
		var number = results[index].number;
		var filesize = results[index].fileSize;
		var children = results[index].children;

		/*console.log('parent:' + parentId);
		console.log('isFolder:' + isFolder);
		console.log('name:' + name);
		console.log('number:' +number);
		console.log('filesize:' + filesize);
		console.log('children:' + children);*/
		if (children.length > 0) {
			if(isFolder) {
				item = '<a href="#" class="folderType" id="'+id+'">'+name+'</a>';
			}
			else {
				item = name;
			}
			$('.container > ul').append('<li class="root folder'+ id + '">'+ item +'</li>');
		}
	});	
	//bind the <a> links
	resetLinks();
 }
 // Function to bind the links to query the API
 function resetLinks() {
	$('a').unbind('click').on('click',function(e) {
		e.stopPropagation();
		e.preventDefault();
		var $this=$(this);
		var folderId = $this.attr('id');
		// insert try...catch
		if (folderId) {
			populateChildren(folderId, $this);
		} else {
			console.log('Not a valid folder link');
		}
	});
 }
