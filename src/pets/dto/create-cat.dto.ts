import { ApiModelProperty } from '@nestjs/swagger';

export class CreateCatDto {

    @ApiModelProperty()
    name: string;

    @ApiModelProperty()
    age: number;

    @ApiModelProperty()
    breed: string;

}
