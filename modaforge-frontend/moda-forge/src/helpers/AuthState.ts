/*
    PROBLEEM: onAuthStateChanged() word pas uitgevoerd NA dat een component zoals home.page.ts word ingeladen
    We willen "displayName" van firebaseAuth achterhalen, maar gaat niet 
    omdat onAuthStateChanged() pas word uitgevoerd NA dat home.page.ts word ingeladen

    OPLOSSING: Boolean die aangeeft of onAuthStateChanged() al is uitgevoerd
*/

export class authState
{
    public static authIsInitialized: boolean = false;
}