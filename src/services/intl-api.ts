/**
 * Provides the methods to check if Intl APIs are supported.
 */
export class IntlAPI {

    private static readonly hasIntl: boolean = typeof Intl === "object" && !!Intl;

    public static hasDateTimeFormat(): boolean {
        return this.hasIntl && Intl​.hasOwnProperty​("DateTimeFormat");
    }

    public static hasNumberFormat(): boolean {
        return this.hasIntl && Intl.hasOwnProperty​("NumberFormat");
    }

    public static hasCollator(): boolean {
        return this.hasIntl && Intl.hasOwnProperty​("Collator");
    }

}
