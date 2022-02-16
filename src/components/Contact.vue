<template>
  <div class="contact">
    <h1>Kontakt</h1>
    <form @submit="sendContact()">
      <div id="row">
        <div id="col-2">
          <label class="control-label" for="border-right">
            <i id="user-icon"></i>
          </label>
          <input
            type="text"
            placeholder="Vorname *"
            id="border-right"
            class="field"
            required
            v-model="forname"
          />
        </div>
        <div id="col-2">
          <label class="control-label" for="border-right2">
            <i id="user-icon"></i>
          </label>
          <input
            type="text"
            placeholder="Nachname *"
            id="border-right2"
            class="field"
            required
            v-model="lastname"
          />
        </div>
      </div>
      <div id="row">
        <div id="col-1">
          <label class="control-label" for="border-right3">
            <i id="user-icon"></i>
          </label>
          <input
            type="text"
            placeholder="Betreff *"
            id="border-right3"
            class="field"
            required
            v-model="subject"
          />
        </div>
      </div>
      <div id="row">
        <div id="col-1">
          <label class="control-label textarea-label" for="border-right4">
            <i id="user-icon"></i>
          </label>
          <textarea
            placeholder="Nachricht *"
            id="border-right4"
            class="field"
            rows="5"
            style="
              box-shadow: 0 0 1px rgba(0, 0, 0, 0.4);
              height: 100%;
              width: 100%;
            "
            required
            v-model="message"
          ></textarea>
        </div>
      </div>
      <hr />
      <div id="row">
        <div id="col-1">
          <b>Hinweis:</b>
          Felder mit
          <span id="pflichtfeld">*</span>
          müssen ausgefüllt werden.
          <br />
          <br />
          <input type="submit" id="senden" />
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Contact extends Vue {
  forname = "";
  lastname = "";
  subject = "";
  message = "";

  sendContact(): void {
    console.log(
      this.forname +
        ", " +
        this.lastname +
        ", " +
        this.subject +
        ", " +
        this.message
    );
    let fixedMessage = this.message
      .replace(/\r\n+$|\r+$|\n+$/, "")
      .replace(/\r\n|\r|\n/g, "%0A");
    const email = window.open(
      "mailto:info@beyonddark.de?subject=" +
        this.subject +
        "&body=Guten%20Tag,%0A%0Aich%20w%C3%BCrde%20gerne%20in%20Kontakt%20tretten.%0ANachricht:%20%22%0A" +
        fixedMessage +
        "%22%0A%0AMit%20freundliche%20Gr%C3%BC%C3%9Fen,%0A" +
        this.forname +
        "%20" +
        this.lastname
    );
    setTimeout(() => email?.close(), 100);
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/theme";

.contact {
  text-align: center;

  form {
    width: 600px;
    max-width: 100%;
    padding: 1.2rem;
    margin-left: 20px;
    padding-top: 22px;
    padding-bottom: 1px;

    hr {
      height: 0.1rem;
      border: none;
      color: #989a9a;
      background-color: #989a9a;
      margin-top: 30px;
      margin-bottom: 30px;
    }

    #row {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 1.3rem;
      width: 100%;

      #col-2 {
        flex-grow: 1;
        flex-basis: 0;
        margin: 0 0.75rem;
        position: relative;

        &:first-child {
          margin-left: 0;
        }

        &:last-child {
          margin-right: 0;
        }
      }

      #col-1 {
        width: 100%;
        position: relative;
      }

      .control-label {
        position: absolute;
        margin-top: 0.19rem;
        height: 91.1%;
        padding: 0.63rem 1rem 0.5rem 1rem;
        color: grey;
        opacity: 0.7;
        width: 3rem;
        z-index: 2;
      }

      input,
      textarea {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        resize: none;
      }

      .field {
        display: block;
        font-size: 14px;
        width: 100%;
        padding: 0.74rem 0.8rem 0.45rem 3.8rem;
        color: #555;
        border: 1px solid #bdbdbd;
        border-radius: 0.25rem;
        -moz-border-radius: 0.25rem;
        -webkit-border-radius: 0.25rem;
        box-shadow: 0 0 1px rgba(0, 0, 0, 0.4);
        transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;

        &:focus {
          border-color: #66afe9 !important;
          outline: 0 !important;
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
            0 0 0.5rem rgba(102, 175, 233, 0.6) !important;
        }
      }

      .textarea-label {
        margin-top: 0.25rem;
        height: 97.1%;
        padding: 0.6rem 1rem 5.1rem 1rem;
      }

      textarea {
        height: 1.7rem;
      }

      #senden {
        width: 100%;
        font-size: 16px;
        font-weight: bold;
        height: 2.5rem;
        margin-top: calc(1rem / 16 * 5);
        padding: 0.5rem 0.75rem;
        color: white;
        background-color: #001aff;
        border: 1px solid transparent;
        border-color: #0017e6;
        border-radius: 4px;

        &:hover {
          background-color: #0014cc;
          border-color: #0011a8;
          cursor: pointer;
        }
      }
    }
  }

  #border-right {
    background-image: url("~@/assets/border-right.png");
    background-position: 2.85rem center;
    -webkit-text-size-adjust: none;
    background-repeat: no-repeat;
  }

  #border-right2 {
    background-image: url("~@/assets/border-right.png");
    background-position: 2.85rem center;
    -webkit-text-size-adjust: none;
    background-repeat: no-repeat;
  }

  #border-right3 {
    background-image: url("~@/assets/border-right.png");
    background-position: 2.85rem center;
    -webkit-text-size-adjust: none;
    background-repeat: no-repeat;
  }

  #border-right4 {
    background-image: url("~@/assets/border-right.png");
    background-position: 2.85rem center;
    -webkit-text-size-adjust: none;
    background-repeat: no-repeat;
  }
}
</style>
