import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { InfoComponent } from '@core/info/info.component';
import { InfoService } from '@core/services/info.service';

describe('InfoComponent', () => {
    let component: InfoComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ HttpClientTestingModule ],
            providers: [ InfoService ],
            declarations: [ InfoComponent ]
        });
    }));

    test('should exist', () => {
        inject(
        [HttpTestingController, InfoService],
        (httpMock: HttpTestingController, dataService: InfoService) =>{
            expect(component).toBeDefined();
        });
    });
});