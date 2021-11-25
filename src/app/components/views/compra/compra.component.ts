import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CompraService } from "src/app/services/compra.service";

@Component({
  selector: "app-compra",
  templateUrl: "./compra.component.html",
  styleUrls: ["./compra.component.css"],
})
export class CompraComponent implements OnInit {
  public saleForm!: FormGroup;
  payment!: any;


  constructor(private fb: FormBuilder, private compraService: CompraService) {

    this.saleForm = this.fb.group({
      Nome: ["", [Validators.required]],
    });
  }


  ngOnInit(): void {
    this.generatePayment();

    let items = localStorage.getItem("carrinhoId");
    console.log({ items });

    this.compraService.list().subscribe((res) => {
        this.payment = res;
      });
  }

  newSale() {
    console.log(this.saleForm.value);
  }

  generatePayment() {}



}
