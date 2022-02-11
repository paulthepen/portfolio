const loading = `
    <div class="center">
        <svg height="100" width="100">
            <circle class="outer outer-spin" cx="50" cy="53" r="40" />
            <circle class="inner inner-spin" cx="50" cy="53" r="36" />
            <polygon id="beard" points="
                25,40 
                25,65 
                43,75 
                57,75 
                75,65 
                75,40 
                65,40 
                65,55 
                55,60 
                45,60 
                35,55 
                35,40" 
                fill="rgb(128, 145, 177)" />
            <polygon id="moustache" points="
                65,55
                53,50
                47,50
                35,55
                35,60
                47,55
                53,55
                65,60"
            fill="rgb(128, 145, 177)" />
            <polygon id="glasses" points="
                35,35
                48,35
                48,40
                52,40
                52,35
                65,35
                65,45
                52,45
                52,40
                48,40
                48,45
                35,45"
            fill="none"
            stroke="rgb(128, 145, 177)"
            stroke-width="2px" />
        </svg>
        <span>Loading</span>
    </div>
`;