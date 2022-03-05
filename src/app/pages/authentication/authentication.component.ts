import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
    selector: 'app-authentication',
    templateUrl: './authentication.component.html',
    styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

    Form: FormGroup;

    IsFormRegister = false;

    constructor(
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        private navigationService: NavigationService,
        private authenticationService: AuthenticationService
    ) { }

    ngOnInit(): void {
        this.onSetFormAttributes();
    }

    onSetFormAttributes(): void {
        this.Form = this.formBuilder.group({
            email: ['', [Validators.required]],
            nama: ['', []],
            password: ['', [Validators.required]],
        })
    }

    onTogglingForm(): void {
        this.IsFormRegister = !this.IsFormRegister;
    }

    onSignIn(Form: any): void {
        this.authenticationService.onSignIn(Form.email, Form.password)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowCustomToast('success', 'Sign In Success')
                        .then(() => {
                            this.navigationService.onNavigateToPage('beranda');
                            this.onResetForm();
                        });
                }
            });
    }

    onRegister(Form: any): void {
        this.authenticationService.onRegister(Form.email, Form.password, Form.nama)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowCustomAlert('success', 'Success', 'Register Berhasil')
                        .then(() => {
                            this.navigationService.onNavigateToPage('');
                            this.onResetForm();
                            this.onTogglingForm();
                        })
                }
            })
    }

    onResetForm(): void {
        this.Form.reset();
        this.email.setValue('');
        this.password.setValue('');
    }

    get email(): AbstractControl { return this.Form.get('email'); }
    get nama(): AbstractControl { return this.Form.get('nama'); }
    get password(): AbstractControl { return this.Form.get('password'); }
}
