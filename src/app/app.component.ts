import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'formApp';
    count = 4;

    onFileSelected(event){
        let fileNameText = document.getElementById("fileName");
        let fileNameContainer = document.getElementById("file-name-container");
        let file = document.getElementById('formFileSm'); 

        let fileName = event.target.files[0].name;
        let fileSize = event.target.files[0].size;

        // alert(Math.floor(fileSize/1000));
        // kb size = fileSize/1000
        // alert(Math.floor(fileSize/1000000));
        // mb size = fileSize/1000000
        console.log(fileName);
        console.log(fileSize);

        if(fileSize > 5000000){
            alert("You file is big, upload only Max file size of 5mb");
            return;
        }else {
            fileNameText.innerHTML = fileName;
            fileNameContainer.style.display = "block";
            file.style.display = "none";
        }
    }

    changeImage(){
        let fileNameContainer = document.getElementById("file-name-container");
        let file = document.getElementById('formFileSm'); 

        file.style.display = "flex";
        fileNameContainer.style.display = "none";
    }

    deleteRow(event){
        let confirmAction = confirm("Are you sure to delete this row?");
        if (confirmAction) {
            this.count = this.count - 1;
            event.target.parentElement.parentElement.remove();
            return;
        } else {
            alert("Action canceled");
        }
    }

    addRow(){
        this.count = this.count + 1;
        const buttonContainer = document.getElementById("add-button");
        const containerDiv = document.createElement("div");
        containerDiv.classList.add("authorized-representative");

        const topDiv = document.createElement("div");
        topDiv.classList.add("d-flex");
        topDiv.classList.add("justify-content-between");

        const label1 = document.createElement("label");
        label1.classList.add("fw-bold")
        label1.classList.add("my-3")
        label1.innerHTML = "Authorized Representative for Official Notices/ Communication " + this.count;
        topDiv.appendChild(label1);
        
        const i1 = document.createElement("i");
        i1.style.cursor = "pointer";
        i1.style.color = "#15A7E0";
        i1.classList.add("fa")
        i1.classList.add("fa-trash-o")
        i1.classList.add("fa-2x")
        i1.classList.add("trash-icon")
        i1.classList.add("mt-2")
        topDiv.appendChild(i1);
        i1.addEventListener("click", this.deleteRow);
        
        const div0 = document.createElement("div");
        div0.classList.add("row");
        div0.classList.add("g-3");

        const div1 = document.createElement("div");
        div1.classList.add("form-group");
        div1.classList.add("required");
        div1.classList.add("col-md-2");
        
        const l1 = document.createElement("label");
        l1.classList.add("control-label");
        l1.innerHTML = "Title";
        div1.appendChild(l1);
        
        const span1 = document.createElement("span");
        span1.classList.add("required");
        span1.innerHTML = "*";    
        span1.style.color = "red";    
        div1.appendChild(span1);

        const s1 = document.createElement("select");
        s1.classList.add("form-select");
        div1.appendChild(s1);
        
        const op1 = document.createElement("option");
        op1.innerHTML = "+63";
        const op2 = document.createElement("option");
        op2.innerHTML = "One";
        const op3 = document.createElement("option");
        op3.innerHTML = "Two";
        const op4 = document.createElement("option");
        op4.innerHTML = "Three";
        s1.appendChild(op1)
        s1.appendChild(op2)
        s1.appendChild(op3)
        s1.appendChild(op4)
        
        const div2 = document.createElement("div");
        div2.classList.add("mb-3")
        div2.classList.add("form-group")
        div2.classList.add("required")
        div2.classList.add("col-md-3")
        const l2 = document.createElement("label");
        l2.classList.add("control-label");
        l2.innerHTML = "First Name";
        l2.setAttribute("name", `first-name-${this.count}`);
        div2.appendChild(l2);

        const span2 = document.createElement("span");
        span2.classList.add("required");
        span2.innerHTML = "*";    
        span2.style.color = "red";
        div2.appendChild(span2);

        const ipt2 = document.createElement("input");
        ipt2.classList.add("form-control")
        div2.appendChild(ipt2);
    
        const div3 = document.createElement("div");
        div3.classList.add("mb-3")
        div3.classList.add("form-group")
        div3.classList.add("required")
        div3.classList.add("col-md-2")
        const l3 = document.createElement("label");
        l3.classList.add("control-label");
        l3.innerHTML = "Middle Initial";
        l3.setAttribute("name", `middle-name-${this.count}`);
        div3.appendChild(l3);

        const span3 = document.createElement("span");
        span3.classList.add("required");
        span3.innerHTML = "*";    
        span3.style.color = "red";
        div3.appendChild(span3);

        const ipt3 = document.createElement("input");
        ipt3.classList.add("form-control")
        div3.appendChild(ipt3);

        const div4 = document.createElement("div");
        div4.classList.add("mb-3")
        div4.classList.add("form-group")
        div4.classList.add("required")
        div4.classList.add("col-md-3")
        const l4 = document.createElement("label");
        l4.classList.add("control-label");
        l4.innerHTML = "Last Name";
        l4.setAttribute("name", `last-name-${this.count}`);
        div4.appendChild(l4);

        const span4 = document.createElement("span");
        span4.classList.add("required");
        span4.innerHTML = "*";    
        span4.style.color = "red";
        div4.appendChild(span4);

        const ipt4 = document.createElement("input");
        ipt4.classList.add("form-control")
        div4.appendChild(ipt4);
        
        const div5 = document.createElement("div");
        div5.classList.add("form-group");
        div5.classList.add("col-md-2");
        
        const l5 = document.createElement("label");
        l5.classList.add("control-label");
        l5.innerHTML = "Suffix";
        div5.appendChild(l5);
        
        const s5 = document.createElement("select");
        s5.classList.add("form-select");
        div5.appendChild(s5);
        
        const op11 = document.createElement("option");
        op11.innerHTML = "Select";
        const op22 = document.createElement("option");
        op22.innerHTML = "1";
        const op33 = document.createElement("option");
        op33.innerHTML = "2";
        const op44 = document.createElement("option");
        op44.innerHTML = "3";
        s5.appendChild(op11)
        s5.appendChild(op22)
        s5.appendChild(op33)
        s5.appendChild(op44)
                
        const div6 = document.createElement("div");
        div6.classList.add("mb-3")
        div6.classList.add("form-group")
        div6.classList.add("required")
        div6.classList.add("col-md-3")
        const l6 = document.createElement("label");
        l6.classList.add("control-label");
        l6.innerHTML = "Designation / Job Title";
        l6.setAttribute("name", `job-title-${this.count}`);
        div6.appendChild(l6);

        const span6 = document.createElement("span");
        span6.classList.add("required");
        span6.innerHTML = "*";    
        span6.style.color = "red";
        div6.appendChild(span6);

        const ipt6 = document.createElement("input");
        ipt6.classList.add("form-control")
        div6.appendChild(ipt6);

        const div7 = document.createElement("div");
        div7.classList.add("mb-3")
        div7.classList.add("form-group")
        div7.classList.add("required")
        div7.classList.add("col-md-3")
        const l7 = document.createElement("label");
        l7.classList.add("control-label");
        l7.innerHTML = "Email";
        div7.appendChild(l7);

        const span7 = document.createElement("span");
        span7.classList.add("required");
        span7.innerHTML = "*";    
        span7.style.color = "red";
        div7.appendChild(span7);

        const ipt7 = document.createElement("input");
        ipt7.classList.add("form-control")
        ipt7.setAttribute("name", `email-${this.count}`);
        div7.appendChild(ipt7);

        const hrDiv = document.createElement("div");        
        hrDiv.style.border = "none";
        hrDiv.style.borderTop = "2px dotted rgb(100, 96, 96)";
        hrDiv.style.color = "#fff";
        hrDiv.style.backgroundColor = "#fff";
        hrDiv.style.height = "1px";
        hrDiv.style.width = "100%";
        
        div0.appendChild(div1);
        div0.appendChild(div2);
        div0.appendChild(div3);
        div0.appendChild(div4);
        div0.appendChild(div5);
        div0.appendChild(div6);
        div0.appendChild(div7);
        div0.appendChild(hrDiv);
                
        containerDiv.appendChild(topDiv);
        containerDiv.appendChild(div0);
        buttonContainer.parentNode.insertBefore(containerDiv, buttonContainer);
    }
}


