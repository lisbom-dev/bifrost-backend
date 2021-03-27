import { InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsInt, IsString } from 'class-validator';

@InputType()
export class CreateTextEntryInput {
    @IsInt()
    @IsNotEmpty({ message: 'esse campo não pode estar vazio ' })
    media_fk: number;

    @IsString()
    @IsOptional()
    text: string;

    @IsInt()
    @IsNotEmpty({ message: 'esse campo não pode estar vazio ' })
    entry_fk: number;
}