import { registerDecorator, ValidationArguments, ValidationOptions } from "@nestjs/class-validator";


export function IsNumberCard(validationOptions?: ValidationOptions) {
    return function (object: unknown, propertyName: string) {
        registerDecorator({
            name: 'IsNumberCard',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value: any, args: ValidationArguments) {

                    return typeof value === 'string' && value.length === 16;
                },
                defaultMessage(args: ValidationArguments) {
                    return 'La tarjeta debe tener exactamente 16 caracteres';
                },
            },
        });
    };
}