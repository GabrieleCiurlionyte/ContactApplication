<template>
    <div>
      <md-dialog-confirm
        :md-active.sync="showConfirmationWindow"
        :md-title="`Ar tikrai norite ištrinti šį kontaką: ${selectedArticle.name} ${selectedArticle.surname}` "
        md-confirm-text="Taip"
        md-cancel-text="Ne"
        @md-cancel="onCancel"
        @md-confirm="onConfirm"
        :md-close-on-esc="false"
        :md-click-outside-to-close="false"/>
    </div>
  </template>
  
  <script>
    export default {
      name: 'DialogConfirm',
      props: ['showConfirmationWindow','selectedArticle'],
      data: () => ({

      }),
      methods: {
        onConfirm () {
          this.$emit('ConfirmDeleteConfirmation');
        },
        onCancel () {
          this.$emit('CancelDeleteConfirmation');
        }
      }
    }
  </script>
  