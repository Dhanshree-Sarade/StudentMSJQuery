$("#btn").on('click',function(e){
	
	alert("button clicked");
	
	e.preventDefault();
	
	let name = $("input[name='name']").val();
	let email = $("input[name='email']").val();
	
	let data = {
		name : name,
		email : email
	};
	
	console.log(data);
	
	$.ajax({
				type: "POST",
				contentType: "application/json",
				url: '/addData',
				data: JSON.stringify(data),
				dataType: 'json',
				success: function (response) {
					alert("Details saved successfully...");
					showTable();
				},
				error: function (e) {
					alert("Not Working..");
				}
			});   
});


$(document).ready(function(){
	alert("Load All Data....");
	showTable();
	
});	
	 function showTable(){
	$.ajax({
				type: "GET",
				contentType: "application/json",
				url: '/getData',
				dataType: 'json',
				success: function (data) {

				console.log(data)

				var d = '';

				for (var i = 0; i < data.length; i++) {

				d += '<tr class="table-danger">' +

				'<td > ' + data[i].id + '</td>' +
				'<td > ' + data[i].name + '</td>' +
				'<td > ' + data[i].email + '</td>' +
				'<td>' + '<button data-bs-toggle="modal" data-bs-target="#exampleModal1" data-student-id="' + data[i].id + '"  id="editBtn-' + data[i].id + '"><i class="bi bi-pencil-square"></i></button>'  + 
				'<button   data-student-id="' + data[i].id + '" id="deleteBtn-' + data[i].id + '"><i class="bi bi-trash"></i></button>'  + '</td>' +
				
				'</tr >'
			 }

            $('#table').html(d); 
        },
        error: function () {
            alert("Error loading data...");
        }
    });

}
$(document).on('click', '[id^="editBtn-"]', function() {
	alert("Do you want to change data ?")
    let id = $(this).data('student-id');
    console.log("ID is : " + id);
    
    $.ajax({
				type: "GET",
				contentType: "application/json",
				url: "/getData/"+id,
				dataType: 'json',
				success: function (data) {
					if(data){
						/*console.log("Student id is : " + data.id);
						console.log("Student name is : " + data.name);
						console.log("Student email is : " + data.email);*/
						
						$("#id").val(data.id);
						$("#name").val(data.name);
						$("#email").val(data.email);
					}
					},
					error : function(e){
						console.log("Error in feching data for Id....");
					}
					
		});
    });

$("#updateData").on('click', function(e){
	alert("Update data successfully...");
	e.preventDefault();
	
	let id = $("#id").val();
	let name = $("#name").val();
	let email = $("#email").val();
	
	let updatedData = {
		id : id,
		name : name,
		email : email
	};
	console.log(updatedData);
	
		$.ajax({
				type: "PUT",
				contentType: "application/json",
				url: "/editData",
				data: JSON.stringify(updatedData),
				dataType: 'json',
				success: function (response) {
					alert("Updated Sucessfully...");
					showTable();
				},
				error: function (e) {
					alert("Not Working..");
				}
			});
});


$(document).on('click', '[id^="deleteBtn-"]', function() {
	
	alert("Do you want to delete record.....");
	let id = $(this).data('student-id');
	console.log("Id is : " + id);
		
		$.ajax({
			type: "DELETE",
			contentType: "application/json",
			url: '/deleteData/'+id,
			success: function (response){
				alert("Deleted Successfully...");
				showTable();
			},
			error: function(e){
				alert("Details not deleted...");
			}
		});
	
	});


