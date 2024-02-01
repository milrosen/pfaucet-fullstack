<script>
    import { goto } from '$app/navigation';
    export let data
    let { supabase } = data
    $: ({ supabase } = data)

    let email = '';
    let displayError = '';
    let emailValidation = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
  
    async function handleSubmit() {
        if (!email.match(emailValidation)) {
            displayError = "Now, let's try entering a real email address, shall we?";
            return;
        } 

        goto('/auth/email_sent') 

        const { error } = await supabase.auth.signInWithOtp({
            email: email,
            options: {shouldCreateUser: false},
        }) 
    }
  </script>
  
  <main>
    <form on:submit|preventDefault={handleSubmit}>
      <h1>Sign in with Email</h1>
      {#if displayError}
        <p class="error">{displayError}</p>
      {/if}
      <label>
        Email:
        <input type="email" bind:value={email} placeholder="Enter your email" required />
      </label>
      <button type="submit">Send Magic Link</button>
    </form>
  </main>
  
  <style>

    main {
       display: block;
        width: 30rem;
        height: 30vh;
        margin: 10rem auto 10rem auto
    }
    h1 {
      font-size: 24px;
    }
  
    p {
      margin-bottom: 20px;
    }
  
    .error {
      color: red;
      margin-bottom: 10px;
    }
  
    input {
      margin-bottom: 10px;
      width: 100%;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  
    button {
      padding: 8px 16px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  </style>
  